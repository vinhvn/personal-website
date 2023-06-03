<script lang="ts">
  import { BouncingTitle, Link } from '@components';

  const links = [
    { name: 'GitHub', url: 'https://github.com/vinhvn' },
    { name: 'Spotify', url: 'https://open.spotify.com/user/tjplab770o3f0ig61a2n3il5x' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/vinhvn' },
    { name: 'Email', url: 'mailto:vincentn337@gmail.com' },
    { name: 'Resume', url: 'https://cdn.discordapp.com/attachments/413806375655833601/1114608129850753134/r2022.png' },
  ];
</script>

<main class="flex justify-center items-center w-screen h-screen bg-gray-950">
  <div class="grow flex flex-col p-12 pt-20 max-w-screen-md rounded-2xl shadow-2xl shadow-gray-800 bg-gray-900">
    <BouncingTitle />
    <h2 class="text-3xl font-semibold text-white mb-10">I'm Vincent Nguyen, a software developer.</h2>
    <p class="text-2xl text-white leading-relaxed mb-8">Currently, I'm working freelance for Nice One Nails.</p>
    <p class="text-2xl text-white leading-relaxed mb-8">
      I strive to build <span
        class="font-medium px-2 rounded bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">beautiful</span
      >
      digital experiences, mainly on the world wide web. I've previously completed internships at <Link
        href="https://getmagical.com">Magical</Link
      >, <Link href="https://aws.amazon.com">AWS</Link>, <Link href="https://kinaxis.com">Kinaxis</Link>, and <Link
        href="https://creativelayer.com">Creative Layer</Link
      >. I've also recently graduated from <Link href="https://carleton.ca/">Carleton University</Link> with a Bachelor's
      in CS.
    </p>
    <p class="text-2xl text-white leading-relaxed mb-16">
      In my spare time, I enjoy walking my dog, Astro (<Link href="/astro.JPG">pet tax</Link>), watching movies, and
      playing video games with my friends.
    </p>
    <div class="flex flex-row justify-between text-xl">
      {#each links as link}
        <Link href={link.url}>{link.name}</Link>
      {/each}
    </div>
  </div>
</main>
