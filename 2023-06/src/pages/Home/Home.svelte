<script lang="ts">
  import { Link, Paragraph, Subtitle, Title } from '@components';

  const letterDelayPairs = [
    ['h', 'animation-delay-0'],
    ['e', 'animation-delay-100'],
    ['l', 'animation-delay-200'],
    ['l', 'animation-delay-300'],
    ['o', 'animation-delay-400'],
    ['!', 'animation-delay-500'],
  ];

  const links = [
    { name: 'GitHub', url: 'https://github.com/vinhvn' },
    {
      name: 'Spotify',
      url: 'https://open.spotify.com/user/tjplab770o3f0ig61a2n3il5x',
    },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/vinhvn' },
    { name: 'Email', url: 'mailto:vincentn337@gmail.com' },
    {
      name: 'Resume',
      url: 'https://drive.google.com/file/d/1ptjGjLhdewnqNn80cQIEnDsLkb1MxOOm/view?usp=sharing',
    },
  ];
</script>

<main class="flex grow items-center justify-center p-4 sm:p-6">
  <div
    class="flex max-w-screen-md flex-col space-y-4 rounded-2xl bg-gray-900 p-6 py-12 shadow-2xl shadow-gray-800 sm:space-y-6 sm:p-8 sm:py-16 md:space-y-8 md:p-10 md:pt-20"
  >
    <Title>
      {#each letterDelayPairs as [letter, delay]}
        <span class={`inline-block animate-bounce ${delay}`}>{letter}</span>
      {/each}
    </Title>

    <Subtitle>I'm Vincent Nguyen, a software developer.</Subtitle>

    <Paragraph>Currently, I'm working freelance for Nice One Nails.</Paragraph>

    <Paragraph>
      I strive to build <span
        class="rounded bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-2 font-semibold"
      >
        beautiful
      </span>
      digital experiences, mainly on the world wide web. I've previously completed
      internships at <Link href="https://getmagical.com">Magical</Link>, <Link
        href="https://aws.amazon.com"
      >
        AWS
      </Link>, <Link href="https://kinaxis.com">Kinaxis</Link>, and <Link
        href="https://creativelayer.com"
      >
        Creative Layer
      </Link>. I've also recently graduated from <Link
        href="https://carleton.ca/"
      >
        Carleton University
      </Link> with a Bachelor's in CS.
    </Paragraph>

    <Paragraph>
      In my spare time, I enjoy walking my dog, Astro (<Link href="/astro.JPG"
        >pet tax</Link
      >), watching movies, and playing video games with my friends.
    </Paragraph>

    <Paragraph />

    <div
      class="flex flex-col space-y-2 text-base sm:flex-row sm:justify-between sm:space-y-0 sm:text-lg md:text-xl"
    >
      {#each links as link}
        <Link href={link.url}>{link.name}</Link>
      {/each}
    </div>
  </div>
</main>
