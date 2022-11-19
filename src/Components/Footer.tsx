import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { ReactNode } from 'react';

export default function SmallWithLogoLeft() {
  return (
    <Box
      bg='#FFDE59'
      color={useColorModeValue('gray.700', 'gray.200')}
      height={'100%'}
      textAlign={'center'}
    >
      <Text 
        fontSize="14"
        fontWeight="bold"
        color="black"
        _hover={
          { color: '#f0c518' }
        }
        >
          João Miguel - Consultor Imobiliário
        </Text>
    </Box>
  );
}