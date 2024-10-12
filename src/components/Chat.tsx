import React, { useState } from 'react'
import { Box, Button, Input, VStack, HStack, Text, Heading } from '@chakra-ui/react'

const Chat = () => {
  const [message, setMessage] = useState('')
  const [chat, setChat] = useState<{ sender: string; message: string }[]>([])

  const handleSend = () => {
    if (message.trim()) {
      setChat([...chat, { sender: 'User', message }])
      setMessage('')
      // Simulate a response from the emergency service
      setTimeout(() => {
        setChat(prev => [...prev, { sender: 'Service', message: 'We have received your message. Help is on the way.' }])
      }, 1000)
    }
  }

  return (
    <Box maxWidth="500px" margin="auto" mt={8}>
      <VStack spacing={4} align="stretch">
        <Heading size="lg">Emergency Chat</Heading>
        <Box height="400px" overflowY="auto" borderWidth={1} borderRadius="md" p={4}>
          {chat.map((msg, index) => (
            <HStack key={index} justifyContent={msg.sender === 'User' ? 'flex-end' : 'flex-start'}>
              <Box 
                bg={msg.sender === 'User' ? 'blue.100' : 'gray.100'} 
                p={2} 
                borderRadius="md"
                maxWidth="70%"
              >
                <Text>{msg.message}</Text>
              </Box>
            </HStack>
          ))}
        </Box>
        <HStack>
          <Input 
            value={message} 
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
          />
          <Button onClick={handleSend} colorScheme="blue">Send</Button>
        </HStack>
        <Button colorScheme="red">Emergency Call</Button>
      </VStack>
    </Box>
  )
}

export default Chat