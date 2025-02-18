import { 
    Lightbulb, 
    CircleMinus,
    RefreshCw, 
    TrendingUp,
    Headset,
    Mail,
    Users, 
    AtSign,
    LayoutDashboard,
    SquareUser,
    BookMarked,
    Heart, 
    ThumbsUp,
    Pin} from 'lucide-react'

import { CustomToast } from '../components'
import { toast } from 'react-toastify'

import { 
    sehatPhoto,
    firstPhoto,
    secondPhoto,
    thirdPhoto,
    fourthPhoto,
    fifthPhoto,
    sixthPhoto,
    firstDoctor,
    secondDoctor,
    personalTrainer,
    pyschologist
 } from '../assets/images'

export const handleToast = (type, title, deskripsi, closeTime) => {
    let bg = 'bg-blue';
    if (type === 'success') {
        bg = 'bg-blue'
    } else if (type === 'warning') {
        bg = 'bg-yellow-300'
    } else if (type === 'error') {
        bg = 'bg-red-400'
    } else {
        bg = 'bg-blue'
    }

    return toast(<CustomToast type={type} title={title} description={deskripsi} />, {
        closeButton: false,
        autoClose: closeTime === false ? false : closeTime,
        position: 'top-center',
        className: `py-1 px-4 w-[400px] ${bg} border-[1px] border-slate-300 rounded-xl`,
        ariaLabel: 'Login Berhasil',
    })
}

export const sidebarLink = [
    {
        icon: <LayoutDashboard size={25} className='stroke-[1.5px] stroke-gray-900 mx-auto'/>,
        path: '/dashboard',
        name: 'Artikel'
    },
    {
        icon: <SquareUser size={25} className='stroke-[1.5px] stroke-gray-900 mx-auto'/>,
        path: 'profile',
        name: 'Profile'
    },
    {
        icon: <Pin size={25} className='stroke-[1.5px] stroke-gray-900 mx-auto'/>,
        path: 'bookmark',
        name: 'Tersimpan'
    },
    {
        icon: <ThumbsUp size={25} className='stroke-[1.5px] stroke-gray-900 mx-auto'/>,
        path: 'favorite',
        name: 'Disukai'
    }
]

export const sidebarLinkAdmin = [
    {
        icon: <LayoutDashboard size={25} className='stroke-[1.5px] stroke-gray-900 mx-auto'/>,
        path: '/admin/dashboard',
        name: 'Artikel'
    },
    // {
    //     icon: <Users size={25} className='stroke-[1.5px] stroke-gray-900 mx-auto'/>,
    //     path: '/admin/dashboard/users',
    //     name: 'Users'
    // },
    {
        icon: <BookMarked size={25} className='stroke-[1.5px] stroke-gray-900 mx-auto'/>,
        path: '/admin/dashboard/create',
        name: 'Buat Artikel'
    },
    {
        icon: <Mail size={25} className='stroke-[1.5px] stroke-gray-900 mx-auto'/>,
        path: '/admin/dashboard/message',
        name: 'Pesan'
    }
]

export const testimonial = [
    {
        name: 'Alexander Cyprus',
        username: 'nighthawk',
        message: 'Website ini ngebantu banget buat mulai gaya hidup sehat. Tipsnya gampang dipraktekin dan beneran works!',
        photo : firstPhoto
    },
    {
        name: 'Chris Leo',
        username: 'leoTheHimalayan',
        message: 'Dulu aku bingung banget soal pola makan, tapi sekarang semuanya jadi lebih jelas. Makasih banget!',
        photo : secondPhoto
    },
    {
        name: 'Dumbo Charles',
        username: 'TheOrangeDestroyer',
        message: 'Seru sih, informasinya nggak cuma detail, tapi juga bikin aku lebih semangat berubah.',
        photo : thirdPhoto
    },
    {
        name: 'Inayatul Mahri',
        username: 'inayatulValen',
        message: 'Nggak nyangka, cuma dari baca-baca di sini, aku jadi paham banget soal pencegahan diabetes.',
        photo : fourthPhoto
    },
    {
        name: 'John Zero',
        username: 'TabbySwift',
        message: 'Website ini kayak temen yang selalu support aku buat jadi lebih sehat. Keren banget!',
        photo : fifthPhoto
    },
    {
        name: 'Kino Kinora',
        username: 'WinterAnggora',
        message: 'Setelah pakai tips dari sini, berat badan aku turun pelan-pelan tapi stabil. Recommended deh!',
        photo : sixthPhoto
    },
];

export const narasumber = [
    {
        name: 'Dr. Alexander Cyprus',
        username: 'Alexandercyprus',
        spesialis: 'Spesialis Kardiovaskular',
        message: 'Platform ini membantu masyarakat memahami pentingnya kesehatan jantung.',
        photo : firstDoctor
    },
    {
        name: 'Inayatul Mahri',
        username: 'inayatulMahri',
        spesialis: 'Spesialis Human Behavior',
        message: 'Mendorong perubahan pola pikir menuju gaya hidup lebih sehat.',
        photo : secondDoctor
    },
    {
        name: 'Dr. Zero Kino',
        username: 'KinoZero',
        spesialis: 'Spesialis Jantung',
        message: 'Langkah penting untuk mencegah penyakit jantung sejak dini.',
        photo : pyschologist
    },
    {
        name: 'Leo Dumbo',
        username: 'leoDumbo',
        spesialis: 'Praktisi Hidup Sehat',
        message: 'Inspiratif dan mudah diterapkan untuk hidup lebih sehat.',
        photo : personalTrainer
    },      
];

export const methods = [
    {
        icon: <Lightbulb size={60} className='h-fit' />,
        judul: 'Kenali',
        desc: 'Sadari dan pahami risiko diabetes dan obesitas dalam hidup Anda. Mulai dari gaya hidup, pola makan, hingga kebiasaan sehari-hari.',
    },
    {
        icon: <CircleMinus size={60} className='h-fit' />,
        judul: 'Kurangi',
        desc: 'Mulailah mengurangi kebiasaan buruk seperti konsumsi gula berlebih, makanan olahan, atau gaya hidup yang kurang aktif.',
    },
    {
        icon: <TrendingUp size={60} className='h-fit' />,
        judul: 'Kembangkan',
        desc: 'Ambil langkah untuk mengembangkan kebiasaan sehat yang mendukung pola hidup baru. Jadikan gaya hidup sehat sebagai bagian dari keseharian Anda.',
    },
    {
        icon: <RefreshCw size={60} className='h-fit' />,
        judul: 'Konsisten',
        desc: 'Pertahankan langkah-langkah yang telah Anda lakukan. Kunci utama pencegahan adalah konsistensi dalam menjalani pola hidup sehat.',
    },
]

export const hotlineData = [
    {
        name: 'Hotline',
        value: '+43435 3442 323',
        icon: <Headset className='stroke-grey my-auto ' size={25} />
    },
    {
        name: 'SMS / WhatsApp',
        value: '+628 3212 3245',
        icon: <Mail className='stroke-grey my-auto' size={25} />
    },
    {
        name: 'Email',
        value: 'healthE@gmail.com',
        icon: <AtSign className='stroke-grey my-auto' size={25} />
    },
]