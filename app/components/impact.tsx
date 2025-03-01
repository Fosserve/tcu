const posts = [
    {
      title: 'Educational Support',
      href: '#',
      category: { name: 'Article', href: '#' },
      description:
      'Provided study grants to over 1,500 students, helping them pursue higher education and improve their future prospects. Increased outreach from supporting 50-100 students annually to more than 500 students per year by 2024.',
      imageUrl:
        'https://img.freepik.com/free-photo/students-sitting-with-notebooks-phone_23-2147844858.jpg?t=st=1740811271~exp=1740814871~hmac=8f107a70d103fff6bbd61015e0f6231a2d1d35a5fb62d027b83a009fcc73c450&w=1380',
    },
    {
      title: 'Outreach Programs',
      href: '#',
      category: { name: 'Video', href: '#' },
      description: 
      "Distributed over 10,000 relief kits to families affected by poverty, disasters, and unforeseen circumstances. Played a critical role in flood relief efforts in Vijayawada, distributing 1,200 kits in 2024 to severely impacted areas such as Ajith Singh Nagar, Jakkampudi, Mulapadu, Payakapuram, RR Peta, and other regions based on necessity",
      imageUrl:
        'https://img.freepik.com/free-photo/charity-cursive-writing-word-concept_53876-125187.jpg?t=st=1740811856~exp=1740815456~hmac=4aeef6b2474641879c6ac0d7930e2f1e71b79a35458573543218bc13f6770882&w=1380',
      
    },
    {
      title: 'Community Development',
      href: '#',
      category: { name: 'Case Study', href: '#' },
      description:
        'Conducted over 50 community engagement events, including health awareness programs, youth skill development workshops, and vocational training for women. Distributed trolleys and bags to 300 (ongoing) religious nuns, supporting their service and mobility needs.  ',
      imageUrl:
        'https://img.freepik.com/free-photo/top-view-origami-chain-people-with-globe_23-2148621071.jpg?t=st=1740811754~exp=1740815354~hmac=3aee627097d990cb13a2a436463744d94503b88d25d9af96b1e952acc77e8213&w=900',
    },
  ]
  
  export default function Grow() {
    return (
      <div className="relative bg-gray-50 px-6 pt-16 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="absolute inset-0">
          <div className="h-1/3 bg-[#fef9f8] sm:h-2/3" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Overview of TCU’s Impact since 2019</h2>
            <p className="mx-auto mt-3 max-w-3xl text-xl text-gray-500 sm:mt-4">
            Over the last five and a half years, Talitha Cumi Unnati (TCU) has made a profound impact on 
            underserved communities, particularly adolescent girls and their families.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <div key={post.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="shrink-0">
                  <img alt="" src={post.imageUrl} className="h-48 w-full object-cover" />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-[#f4f9ec] p-6">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-[#43aa8d]">
                      <a href={post.category.href} className="hover:underline">
                        {post.category.name}
                      </a>
                    </p>
                    <a href={post.href} className="mt-2 block">
                      <p className="text-xl font-semibold text-[#97c262]">{post.title}</p>
                      <p className="mt-3 text-base text-gray-500">{post.description}</p>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  