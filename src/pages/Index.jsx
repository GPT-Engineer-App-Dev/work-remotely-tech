import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, VStack, Text, Button, HStack, Box, SimpleGrid } from "@chakra-ui/react";
import { useJobs } from "../integrations/supabase/index.js";

const Index = () => {
  const [filter, setFilter] = useState("All");
  const { data: jobs, isLoading, error } = useJobs();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error loading jobs</Text>;
  }

  const filteredJobs = filter === "All" ? jobs : jobs.filter(job => job.job_area === filter);

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} w="full">
        <Text fontSize="3xl" fontWeight="bold">Remote Tech Jobs</Text>
        <HStack spacing={4}>
          <Button onClick={() => setFilter("All")} colorScheme={filter === "All" ? "blue" : "gray"}>All</Button>
          <Button onClick={() => setFilter("Product")} colorScheme={filter === "Product" ? "blue" : "gray"}>Product</Button>
          <Button onClick={() => setFilter("Design")} colorScheme={filter === "Design" ? "blue" : "gray"}>Design</Button>
          <Button onClick={() => setFilter("Engineering")} colorScheme={filter === "Engineering" ? "blue" : "gray"}>Engineering</Button>
        </HStack>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="full">
          {filteredJobs.map(job => (
            <Box key={job.id} p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <Link to={`/job/${job.id}`}>
                <Text fontSize="xl">{job.jobs_title}</Text>
                <Text mt={2} color="gray.500">{job.job_area}</Text>
              </Link>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;