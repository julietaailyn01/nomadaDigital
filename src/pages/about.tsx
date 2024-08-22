import { Box, Heading, Text, VStack, Image } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';

const About: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>Sobre Nosotros - Nomada Digital</title>
        <meta name="description" content="Sobre Nomada Digital" />
      </Head>

      <VStack spacing={8} mt={10} align="center">
        <Heading as="h1" size="2xl" color="primary">
          Sobre Nosotros
        </Heading>
        <Image src="/images/about-us.jpg" alt="Sobre Nosotros" boxSize="300px" />
        <Text fontSize="xl" textAlign="center" maxW="600px" color="dark">
          Nomada Digital es una empresa dedicada a la creación de aplicaciones móviles para Android. Nuestro objetivo es proporcionar soluciones innovadoras y de alta calidad para un mundo cada vez más digital. En el futuro, aspiramos a competir con líderes de la industria de juegos móviles como King.
        </Text>
      </VStack>
    </Box>
  );
};

export default About;
