import { Box, Heading, Link, VStack, Image } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';

const Games: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>Apps - Nomada Digital</title>
        <meta name="description" content="Nuestros Juegos" />
      </Head>

      <VStack spacing={8} mt={10} align="center">
        <Heading as="h1" size="2xl" color="primary">
          Nuestras Aplicaciones
        </Heading>
        <Box maxW="300px" textAlign="center">
            <Image src="/images/poke trivia logo.png" alt="PokeGame" boxSize="200px" mx="auto" mb={4} />
            <Link href="https://play.google.com/store/apps/details?id=com.julietaailyn.pokegame" isExternal color="dark" fontSize="xl">
              PokeGame
            </Link>
          </Box>
          <Box maxW="300px" textAlign="center">
            <Image src="/images/HoroscopoLogo.png" alt="PokeGame" boxSize="200px" mx="auto" mb={4} />
            <Link href="https://play.google.com/store/apps/details?id=com.julietaailyn.horoscopoapp" isExternal color="dark" fontSize="xl">
              Horoscopo
            </Link>
          </Box>
        <Link href="https://play.google.com/store/apps/developer?id=juailyn&hl=es_419" isExternal color="dark" fontSize="xl">
          Ver más juegos en Google Play
        </Link>
      </VStack>
    </Box>
  );
};

export default Games;
