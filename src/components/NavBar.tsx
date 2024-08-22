import { Box, Flex, HStack, Link, Image } from '@chakra-ui/react';
import NextLink from 'next/link';

const Navbar = () => {
  return (
    <Box bg="primary" px={4} overflow="hidden">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <NextLink href="/" passHref>
          <Link marginTop={6}>
          <Image src="/images/logoSinnombre.png" alt="Nomada Digital" w={20} />
          </Link>
        </NextLink>
        <HStack as="nav" spacing={4}>
            <Link href='/' color="white">Inicio</Link>
            <Link href="/contact/" color="white">Contacto</Link>
            <Link href="/games" color="white">Juegos</Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
