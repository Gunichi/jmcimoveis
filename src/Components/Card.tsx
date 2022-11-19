import React from 'react'

import { Box, Heading, Text, Link, VStack, Code, Grid, Flex, Button, Image } from '@chakra-ui/react'

import { BsTelephoneInbound } from 'react-icons/bs'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'

const Card = () => {
  return (
    
    <Flex align="center" justify="center" bg='black'>

      <VStack>
        <Box
          bg='#68727B'
          rounded={'full'}
          pos={'relative'}
        >
        <Image src="https://i.imgur.com/JfbfmWd.png" width={'200'} height='200' alt="LogoPhoenix" />
        </Box>
        <Text 
          fontSize="3xl" 
          fontWeight="bold" 
          color="#FFDE59"
          _hover={
            { color: '#f0c518' }
          }
          >
            João Miguel
          </Text>
        <Text fontSize="1xl" fontWeight="bold" color="#FFDE59">Consultor imobiliário</Text>
        <Box 
          p={4}
          w="300px"
          h="200px"
          boxShadow="lg"
          rounded="lg"
          textAlign="center"
        >
          <Button
            leftIcon={<BsTelephoneInbound />}
            bg='#FFDE59'
            color='black'
            _hover={{ bg: '#f0c518', color: 'black' }}
            mt={4}
          > 
            Ligar para mim 
          </Button>
          <Button
            leftIcon={<FaWhatsapp />}
            bg='#FFDE59'
            color='black'
            _hover={{ bg: '#f0c518', color: 'black' }}
            mt={4}
          > 
            Chamar no Whatsapp
          </Button>
          <Button
            leftIcon={<FaInstagram />}
            bg='#FFDE59'
            color='black'
            _hover={{ bg: '#f0c518', color: 'black' }}
            mt={4}
          > 
            Ligar para mim 
          </Button>
        </Box>
      </VStack>
    </Flex>

  )
}

export default Card