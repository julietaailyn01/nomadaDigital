import { Box, Heading, Text, VStack, HStack, Link, Input, Textarea, Button, FormControl, FormLabel } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { FaInstagram } from 'react-icons/fa';
import { TfiEmail } from 'react-icons/tfi';

const Contact: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>Contacto - Nomada Digital</title>
        <meta name="description" content="Contacto Nomada Digital" />
      </Head>

      <VStack spacing={8} mt={10} align="center">
        <Heading as="h1" size="2xl" color="primary">
          Contacto
        </Heading>
        <Text fontSize="xl" textAlign="center" color="dark">
          Si tienes alguna pregunta o deseas saber más sobre nuestros servicios, por favor contáctanos a través del formulario a continuación o mediante nuestras redes sociales.
        </Text>
        <Box w="100%" maxW="600px">
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Tu email" />
          </FormControl>
          <FormControl id="message" isRequired mt={4}>
            <FormLabel>Mensaje</FormLabel>
            <Textarea placeholder="Tu mensaje" />
          </FormControl>
          <Button colorScheme="primary" size="lg" mt={4}>
            Enviar
          </Button>
        </Box>
        <HStack spacing={4}>
          <Link href="https://www.instagram.com/nomadaa.digital/" isExternal>
            <Button leftIcon={<FaInstagram />} colorScheme="primary" variant="outline">
              Instagram
            </Button>
          </Link>
          <Link href="mailto:nd.nomadadigital@gmail.com">
            <Button leftIcon={<TfiEmail />} colorScheme="primary" variant="outline">
              Email
            </Button>
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Contact;
