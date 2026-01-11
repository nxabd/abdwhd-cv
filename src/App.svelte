<script>
	import { workExperience } from './lib/const.js';
  import About from "./components/About.svelte";
  import WorkSection from "./components/WorkSection.svelte";
  import Layout from "./layouts/BaseLayout.svelte";
  import SkillSection from './components/SkillSection.svelte';
  import ProjectSection from './components/ProjectSection.svelte';
  import Slider from './components/Certificate.svelte';
  import Certificate from './components/Certificate.svelte';
</script>


<Layout>
    <About/>
    <WorkSection jobs= {workExperience}/>
    <SkillSection/>
    <Certificate/>
    <ProjectSection/>
</Layout>