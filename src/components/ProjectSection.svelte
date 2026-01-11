<script>
    const projects=[
        {
            title : 'Abdwhd',
            description : 'my personal website portofolio, build with svelte and tailwindcss',
            stack :['Svelte', 'Tailwind CSS']
        },

        {
            title : 'porto-rrv7',
            description : 'portofolio website build withreact router v7 and tailwindcss ',
            stack :['React router v7', 'Tailwind CSS']
        },
         {
            title : 'contact management app',
            description : 'built with Vue.js and Tailwind CSS on the frontend, powered by Express.js and Node.js on the backend, featuring full CRUD functionality (create, update, delete) with a MySQL database.',
            stack :['Vue.js', 'Tailwind CSS', 'Express.js', 'Node.js', "Mysql"]
        },
         {
            title : 'explore bawean',
            description : 'A web application built with Vue.js and Tailwind CSS on the frontend, using Strapi as a headless CMS backend to manage and deliver dynamic content.',
            stack :['Vue.js', 'Tailwind CSS', 'Strapi']
        },

    ]
</script>



<section class="mt-10">
     <h1 class="text-2xl font-semibold">Project</h1>
     
     <div class="mt-4 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3 ">
        {#each projects as item}
        <div class="min-h-30 lg:h-50 border border-slate-200 rounded-md flex flex-col justify-between p-2">
            <div>
                <h2 class="font-semibold">{item.title }<span class="text-xl text-green-500 font-bold"> &nbsp;.</span></h2> 
                <p class="text-xs md:text-sm">
                    {item.description.length > 60 
                    ?
                    item.description.slice(0,60) + ' ...' : item.description
                    }</p>
            </div>
            
            <div class="flex">
                <ul class="flex flex-wrap gap-2 text-xs">
                    {#each item.stack as tech}
                        
                    <li class="bg-zinc-200 px-2 py-1 rounded-md text-black font-semibold text-xs">
                        {tech}
                    </li>
                    
                    {/each}
                </ul>
            </div>
        </div>
        {/each}
     
     </div>
</section>