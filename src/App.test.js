import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

describe('TEST APP', () => {

  test('ADD TASK', () => {
    render(<App />)


    const add = screen.getByTestId('add')
    const input = screen.getByPlaceholderText('Enter the text...')


    expect(screen.queryByTestId('task')).toBeNull()

    fireEvent.click(add)
    expect(screen.queryByTestId('task')).toBeNull()

    fireEvent.input(input, {
      target: {value: ''}
    })
    fireEvent.click(add)
    expect(screen.queryByTestId('task')).toBeNull()

    fireEvent.input(input, {
      target: {value: 'firstTask'}
    })
    fireEvent.click(add)
    expect(screen.getByTestId('task')).toBeInTheDocument()
  })

  test('DEL TASK', () => {
    render(<App />)


    const add = screen.getByTestId('add')
    const input = screen.getByPlaceholderText('Enter the text...')


    expect(screen.queryByTestId('task')).toBeNull()

    fireEvent.input(input, {
      target: {value: 'firstTask'}
    })
    fireEvent.click(add)
    expect(screen.getByTestId('task')).toBeInTheDocument()


    const del = screen.getByTestId('del 1')


    fireEvent.click(del)
    expect(screen.queryByTestId('task')).toBeNull()
  })

  test('TASK COUNTER', () => {
    render(<App />)


    const add = screen.getByTestId('add')
    const input = screen.getByPlaceholderText('Enter the text...')
    const counter = screen.getByText('Unfulfilled Tasks: 0')


    expect(counter).toContainHTML('Unfulfilled Tasks: 0')

    fireEvent.input(input, {
      target: {value: 'firstTask'}
    })
    fireEvent.click(add)
    expect(counter).toContainHTML('Unfulfilled Tasks: 1')

    fireEvent.input(input, {
      target: {value: 'secondTask'}
    })
    fireEvent.click(add)
    expect(counter).toContainHTML('Unfulfilled Tasks: 2')


    const del = screen.getByTestId('del 1')
    const taskText = screen.getByText('2. secondTask')

    fireEvent.click(taskText)
    expect(counter).toContainHTML('Unfulfilled Tasks: 1')

    fireEvent.click(del)
    expect(counter).toContainHTML('Unfulfilled Tasks: 0')
  })

  test('TASK COMPLETE', () => {
    render(<App />)


    const add = screen.getByTestId('add')
    const input = screen.getByPlaceholderText('Enter the text...')


    fireEvent.input(input, {
      target: {value: 'firstTask'}
    })
    fireEvent.click(add)
    expect(screen.getByTestId('task')).toBeInTheDocument()


    const complete = screen.getByTestId('complete')
    const taskText = screen.getByText('1. firstTask')


    fireEvent.click(taskText)
    expect(complete).toHaveClass('item-text strike')
  })
})