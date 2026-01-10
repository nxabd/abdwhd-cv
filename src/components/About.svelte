<script>
    import { Globe } from "lucide-svelte";
    import {linkSocial} from '../lib/const'
</script>

<section class=" mt-10">
    <h1 class="font-semibold text-2xl">Abd Wahid</h1>
    <p class="text-zinc-600 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam officiis praesentium provident!</p>
    <div class="mt-2">
        <p class="text-sm"><span class="flex gap-1"><Globe class="w-4"/>Bogor, Jawa Barat</span></p>
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