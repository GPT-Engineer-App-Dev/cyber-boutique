import { Box, Container, VStack, Text, Image, SimpleGrid, Heading, Flex, Spacer, HStack, Link } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const sampleProducts = [
  { id: 1, name: "Smartphone", price: "$699", image: "/images/smartphone.jpg" },
  { id: 2, name: "Laptop", price: "$999", image: "/images/laptop.jpg" },
  { id: 3, name: "Headphones", price: "$199", image: "/images/headphones.jpg" },
  { id: 4, name: "Smartwatch", price: "$299", image: "/images/smartwatch.jpg" },
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <VStack spacing={0} align="stretch">
        {/* Navigation Bar */}
        <Box bg="blue.600" w="100%" p={4} color="white">
          <Flex align="center">
            <Heading size="md">ElectroShop</Heading>
            <Spacer />
            <HStack spacing={4}>
              <Link href="#">Home</Link>
              <Link href="#">Products</Link>
              <Link href="#">Contact</Link>
            </HStack>
          </Flex>
        </Box>

        {/* Main Content */}
        <Box p={4}>
          <Heading as="h2" size="xl" mb={6} textAlign="center">
            Featured Products
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
            {sampleProducts.map((product) => (
              <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Image src={product.image} alt={product.name} />
                <Box p={6}>
                  <Text fontWeight="bold" fontSize="xl">
                    {product.name}
                  </Text>
                  <Text mt={2}>{product.price}</Text>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        {/* Footer */}
        <Box bg="gray.800" w="100%" p={4} color="white" mt={10}>
          <VStack spacing={4}>
            <Text>Contact Us: info@electroshop.com</Text>
            <HStack spacing={4}>
              <Link href="#"><FaFacebook /></Link>
              <Link href="#"><FaTwitter /></Link>
              <Link href="#"><FaInstagram /></Link>
            </HStack>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;