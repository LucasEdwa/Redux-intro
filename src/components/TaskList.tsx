import { Box, List, ListItem, Text, Checkbox, Button } from '@chakra-ui/react'
import { useAppDispatch, useAppSelector } from '../state/hooks/hooks'
import { removeTask, toggleTask } from '../state/tasks/TaskSlice'

export const TaskList = () => {
    const tasks = useAppSelector((state) => state.tasks.tasks)
    const dispatch = useAppDispatch()

    return (
        <Box mt={4}>
            <List spacing={3}>
                {tasks.map((task) => (
                    <ListItem 
                        key={task.id} 
                        display="flex" 
                        alignItems="center" 
                        gap={2}
                        p={2}
                        borderWidth="1px"
                        borderRadius="md"
                    >
                        <Checkbox 
                            isChecked={task.completed}
                            onChange={() => dispatch(toggleTask(task.id))}
                        />
                        <Text flex={1} textDecoration={task.completed ? 'line-through' : 'none'}>
                            {task.title}
                        </Text>
                        <Button 
                            size="sm" 
                            colorScheme="red"
                            onClick={() => dispatch(removeTask(task.id))}
                        >
                            Delete
                        </Button>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
} 