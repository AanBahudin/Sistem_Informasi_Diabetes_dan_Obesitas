import React, { useEffect, useState } from 'react'
import { Home, Search, X } from 'lucide-react'
import ArticelCards from '../components/ArticelCards'
import customFetch from '../utils/customFetch'
import { useLoaderData, useNavigate, useNavigation } from 'react-router-dom'
import { Loading } from '../components'

export const loader = async({ request }) => {

  const url = new URL(request.url);
  const judul = url.searchParams.get("judul");
  let newsUrl = judul !== null ? `/news?judul=${judul}` : '/news'

  try {
    const { data } = await customFetch.get(newsUrl)
    return data
  } catch (error) {
    return error
  }
}

const PublicAllNews = () => {

  const data = useLoaderData()

  const [isSearch, setIsSearch] = useState('')
  const [filter, setFilter] = useState('')
  const navigate = useNavigate()
  const isLoading = useNavigation().state === 'loading'
  const [debouncedQuery, setDebounceQuery] = useState('')

  //  UPDATE URL
  useEffect(() => {
    if (debouncedQuery) {
      navigate(`?judul=${encodeURIComponent(debouncedQuery)}`)
    } else {
      navigate('/artikel')
    }
  }, [debouncedQuery, navigate])

  //  DEBOUNCE MENGGUNAKAN USEEFFECT
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceQuery(isSearch.trim())
    }, [500])


    return () => {
      clearTimeout(handler)
    }
  }, [isSearch])


  return (
    <div className='w-[90%] mx-auto'>
      
      <section className='w-full bg-slate-200 flex items-center justify-start px-14 mt-32 mx-auto gap-x-6 p-4 rounded-md'>
        <Home className='w-5 h-5 stroke-slate-600 mr-4' />
        <p className='text-sm'>Homepage</p>
        <p className='text-sm'>/</p>
        <p className='text-sm font-semibold text-blue'>Artikel</p>
      </section>

      <article className='w-full flex justify-between items-center gap-x-4 mt-10'>
        
        <div className='bg-white w-[40%] h-fit flex items-center justify-start gap-x-2 px-2 rounded-lg border-slate-500 border-[2px]'>
          <Search size={35} className='py-2 stroke-slate-500 stroke-[1.5px]' />
          <input autoComplete='off' autoFocus className='text-[12px] outline-none h-10 w-80 flex-1  placeholder:text-[12px] ' type="text" name='query' id='query' placeholder='search articel' onChange={(e) => setIsSearch(e.target.value)} value={isSearch}/>
          <X size={35} className={`py-2 stroke-red-800 stroke-[1.5px] ${isSearch ? 'visible' : 'invisible'}`} onClick={() => setIsSearch("")} />
        </div>

        <div className='w-[20%]'>
          <select name="type" id="type" className='w-full h-10 rounded-lg px-4 outline-none text-[12px] border-slate-500 border-[2px]'  onChange={e => setFilter(e.target.value)} defaultValue={filter}>
            <option value="" className='text-[12px]'>All</option>
            <option value="Diabetes">diabetes</option>
            <option value="Obesitas">obesitas</option>
          </select>
        </div>

      </article>


      {
        isLoading ? (
          <div className='mt-10'>
            <Loading />
          </div>
        ) : (

          data.news.length === 0 ? (
            <div className='mt-10'>
              <h1 className='text-xl font-semibold text-slate-600'>Artikel tidak ada</h1>
            </div>
          ) : (
            <div className='mt-10 grid grid-cols-4 gap-x-10'> 
              {data.news.map((item, index) => {
                return <ArticelCards url={`/artikel/${item.judulArtikel}`} {...item} key={index} />
              })}
            </div>
          )
        )

      }


    </div>
  )
}

export default PublicAllNews