<script>
    const skills=
        [
           "JavaScirpt/TypeScript",
           "Vue/Nuxt.js",
           "React/Next.js",
           "Svelte/SvelteKit",
           "Node.js",
           "MongoDB",
           "PostgreSQL",
           "Mysql"
        ]
    
</script>

<section class="mt-10 mx-auto">
    <h1 class="text-2xl font-semibold">Skills</h1>

    <ul class="flex flex-wrap gap-2 text-xs py-4">
    {#each skills as item}
    <li class="bg-slate-800 px-2 py-1 rounded-md text-white font-semibold">
       {item} 
    </li>
    {/each}
    </ul>
</section>