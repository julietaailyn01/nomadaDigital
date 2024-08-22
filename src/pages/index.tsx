import { Box, Button, Heading, Text, VStack, Image, Stack, HStack, Link, Divider } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>Nomada Digital</title>
        <meta name="description" content="Nomada Digital - Aplicaciones móviles Android" />
      </Head>

      <Box bg="primary" p={8} textAlign="center">
        <Image src="/images/logo.png" alt="Nomada Digital" boxSize="400px" mx="auto" mb={4} />
        <Text fontSize="xl" color="dark">
          Creación de aplicaciones móviles Android para un mundo digital
        </Text>
        <Link href="/contact" >
        <Button colorScheme="primary" size="lg" mt={4}>
            
          Contáctanos
        </Button>
        </Link>
      </Box>

      {/* <Box p={8}>
        <Heading as="h2" size="xl" textAlign="center" color="secondary" mb={8}>
          Nuestros Servicios
        </Heading>
        <HStack spacing={8} justify="center">
          <Box maxW="300px" textAlign="center">
            <Image src="/images/service1.jpg" alt="Servicio 1" boxSize="200px" mx="auto" mb={4} />
            <Text fontSize="lg" color="dark">Desarrollo de aplicaciones móviles</Text>
          </Box>
          <Box maxW="300px" textAlign="center">
            <Image src="/images/service2.jpg" alt="Servicio 2" boxSize="200px" mx="auto" mb={4} />
            <Text fontSize="lg" color="dark">Consultoría en tecnología móvil</Text>
          </Box>
          <Box maxW="300px" textAlign="center">
            <Image src="/images/service3.jpg" alt="Servicio 3" boxSize="200px" mx="auto" mb={4} />
            <Text fontSize="lg" color="dark">Mantenimiento y soporte</Text>
          </Box>
        </HStack>
      </Box> */}

      <Divider my={8} />

      <Box p={8}>
        <Heading as="h2" size="xl" textAlign="center" color="secondary" mb={8}>
          Aplicaciones Destacados
        </Heading>
        <VStack spacing={8} align="center">
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
            Ver más aplicaciones en Google Play
          </Link>
        </VStack>
      </Box>
    </Box>
  );
};

export default Home;
