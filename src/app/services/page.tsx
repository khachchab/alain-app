'use client'

import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react'
import { IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp } from 'react-icons/io5'
import { ReactElement } from 'react'

interface FeatureProps {
  text: string
  iconBg: string
  icon?: ReactElement
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  )
}

export default function Services() {
  return (
    <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            Nos services 
          </Text>
          <Heading>Nous offrons une gamme complète de services de décoration d'intérieur</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
          Nous mettons à votre disposition une expertise approfondie en matière de sélection de couleurs,
         de textures et d'agencement spatial pour créer des intérieurs harmonieux et élégants,
          en harmonie avec votre style de vie et vos préférences esthétiques.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
            }>
            <Feature
              icon={<Icon as={IoAnalyticsSharp} color={'yellow.500'} w={5} h={5} />}
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={'Conception et planification d intérieurs'}
            />
            <Feature
              icon={<Icon as={IoLogoBitcoin} color={'green.500'} w={5} h={5} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'Facilités de paiement flexibles disponibles pour tous les projets de décoration'}
            />
            <Feature
              icon={<Icon as={IoSearchSharp} color={'purple.500'} w={5} h={5} />}
              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text={'Conseils personnalisés en matière de décoration'}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={'https://www.decorilla.com/online-decorating/wp-content/uploads/2022/07/Contemporary-interior-design-and-decor-Urbanology-Designs.jpg'
            }
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  )
}