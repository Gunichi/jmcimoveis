import React from 'react'

import { Box, Heading, Text, Link, VStack, Code, Grid, Flex, Button, Image } from '@chakra-ui/react'

import { BsTelephoneInbound } from 'react-icons/bs'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'
import SmallWithLogoLeft from '../Components/Footer'
import Nav from '../Components/Navbar'

const Card = () => {
  return (
    <>
    <Nav />
      <Flex 
        align="center" 
        justify="center" 
        bg='black' 
        height={'100%'}
      >
        
        <VStack>
          <Box
            bg='#68727B'
            rounded={'full'}
            pos={'relative'} 
            mt = {5}
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
              onClick={() => window.open('tel:34997761610')}
            > 
              Ligar para mim 
            </Button>
            <Button
              leftIcon={<FaWhatsapp />}
              bg='#FFDE59'
              color='black'
              _hover={{ bg: '#f0c518', color: 'black' }}
              mt={4}
              onClick={() => window.open('https://api.whatsapp.com/send?phone=5534997761610&text=Olá%2C%20tudo%20bem%3F%20Estou%20em%20busca%20de%20uma%20novo%20imóvel%2C%20pode%20me%20ajudar%3F', '_blank')}
            > 
              Chamar no Whatsapp
            </Button>
            <Button
              leftIcon={<FaInstagram />}
              bg='#FFDE59'
              color='black'
              _hover={{ bg: '#f0c518', color: 'black' }}
              mt={4}
              onClick={() => window.open('https://www.instagram.com/jmc.imoveis/', '_blank')}
            > 
              Ligar para mim 
            </Button>
          </Box>
        </VStack>
      </Flex>
      <SmallWithLogoLeft />
        
      
    </>

  )
}

export default Card

