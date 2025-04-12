import { Formik, Form, Field, FieldProps, FormikProps } from 'formik'
import { Button, Input, Box } from '@chakra-ui/react'
import { useAppDispatch } from '../state/hooks/hooks'
import { addTask } from '../state/tasks/TaskSlice'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
} from '@chakra-ui/form-control'

interface FormValues {
    title: string
}

export const AddTask = () => {
    const dispatch = useAppDispatch()

    const validateTitle = (value: string) => {
        let error
        if (!value) {
            error = 'Title is required'
        } else if (value.length < 3) {
            error = 'Title must be at least 3 characters long'
        }
        return error
    }

    return (
        <Formik
            initialValues={{ title: '' }}
            onSubmit={(values: FormValues, actions) => {
                dispatch(addTask({ title: values.title }))
                actions.resetForm()
            }}
        >
            {(props: FormikProps<FormValues>) => (
                <Box >
                    <Form >
                        <Field name="title" validate={validateTitle}>
                            {({ field, form }: FieldProps<string, FormValues>) => (
                                <FormControl isInvalid={!!(form.errors.title && form.touched.title)}>
                                    <FormLabel>Task Title</FormLabel>
                                    <Input {...field} placeholder="Enter task title" />
                                    <FormErrorMessage>{form.errors.title}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <Button
                            mt={4}
                            
                            
                            colorScheme="teal"
                            
                            isLoading={props.isSubmitting}
                            type="submit"
                        >
                            Add Task
                        </Button>
                    </Form>
                </Box>
            )}
        </Formik>
    )
}