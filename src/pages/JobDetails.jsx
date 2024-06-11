import { Box, Text, Heading, VStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const jobs = [
  { id: 1, title: "Frontend Developer", category: "Engineering", description: "Develop and maintain user interfaces." },
  { id: 2, title: "Product Manager", category: "Product", description: "Oversee product development from start to finish." },
  { id: 3, title: "UI/UX Designer", category: "Design", description: "Design user interfaces and experiences." },
  { id: 4, title: "Backend Developer", category: "Engineering", description: "Develop and maintain server-side logic." },
  { id: 5, title: "Product Designer", category: "Design", description: "Design products that meet user needs." },
];

const JobDetails = () => {
  const { jobId } = useParams();
  const job = jobs.find(job => job.id === parseInt(jobId));

  if (!job) {
    return <Text>Job not found</Text>;
  }

  return (
    <Box p={5}>
      <VStack spacing={4} align="start">
        <Heading>{job.title}</Heading>
        <Text fontSize="lg" color="gray.500">{job.category}</Text>
        <Text>{job.description}</Text>
      </VStack>
    </Box>
  );
};

export default JobDetails;