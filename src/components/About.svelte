<script>
    import { Globe } from "lucide-svelte";
    import {linkSocial} from '../lib/const'
</script>

<section class=" mt-2">
        <!-- <a href="/blog" class="font-semibold italic underline flex justify-end"> /Blog</a> -->
      <h1 class="font-semibold text-2xl">
        <a href="/">Abd Wahid</a>
    </h1>
    <p class="text-zinc-600 mt-3 text-sm">
    Hi! I’m a beginner web developer passionate about learning and building projects with modern web tools. <span class="bg-zinc-500 text-white">I love exploring Linux</span>, experimenting with <span class="bg-zinc-500 text-white">Svelte, Vue.js, React.js and Tailwind CSS,</span> and improving my skills every day. I’m excited to create useful and interactive web applications while growing as a developer.

    </p>
    <!-- <p class="text-zinc-600 text-sm mt-2">Hi! I’m a beginner web developer who loves Linux, learning new web tools, and building small projects with Svelte, Vue.js, React.js and Tailwind CSS.</p> -->
    <div class="mt-2">
        <p class="text-sm"><span class="flex gap-1 items-center"><Globe class="w-4"/>Bogor, Jawa Barat</span></p>
    </div>
    
    <div class="mt-4">
        <ul class="flex gap-3">
            {#each linkSocial as item}
                <li class="border p-1 rounded-md cursor-pointer text-zinc-500 hover:text-black hover:bg-zinc-300/20">
                    <a href={item.url} target="_blank" rel="noopener noreferrer" title={item.name}>
                    <svelte:component this={item.icon} size={16} />
                    </a>
                </li>
            {/each}
        </ul>
    </div>
</section>