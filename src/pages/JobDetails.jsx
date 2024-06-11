import { Box, Text, Heading, VStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useJob } from "../integrations/supabase/index.js";

const JobDetails = () => {
  const { jobId } = useParams();
  const { data: job, isLoading, error } = useJob(jobId);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error loading job details</Text>;
  }

  if (!job) {
    return <Text>Job not found</Text>;
  }

  return (
    <Box p={5}>
      <VStack spacing={4} align="start">
        <Heading>{job.jobs_title}</Heading>
        <Text fontSize="lg" color="gray.500">{job.job_area}</Text>
        <Text>{job.job_type}</Text>
      </VStack>
    </Box>
  );
};

export default JobDetails;