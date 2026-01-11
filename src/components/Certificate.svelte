<script>
    import Carousel from 'svelte-carousel';
    import { certif } from '../lib/certif';
</script>

<section class="mt-10">
    <h1 class="text-2xl font-semibold">Certificate</h1>
    <Carousel  particlesToShow={3} particlesToScroll={2} dots={false} arrows={false}>
        {#each certif as img}
            <img src={img} alt="" class="m-1 object-cover mt-2">
        {/each}
    </Carousel>
     
    
</section>