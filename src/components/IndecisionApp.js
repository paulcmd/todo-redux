import React, { useState, useEffect } from 'react'

import AddOption from './AddOption'
import Header from './Header'
import Action from './Action'
import Options from './Options'
import OptionModal from './OptionModal'

const IndecisionApp = () => {

    const [todos, setTodos] = useState([])
    const [selectedTodo, setSelectedTodo] = useState(null)
    console.log('Options from Indecision : ', todos)
    // state = {
    //     options: [],
    //     selectedOption: undefined
    // }

    const handleDeleteOptions = () => {
       setTodos([])
        // this.setState(() => ({ options: [] })) //we use parenthesis around brackets for the short hand arrow method, or else the function will assume we are scoping
    }

    const markComplete = (clickedTodoIndex) => {
//console.log('option at index :', clickedOptionIndex)
        const updatedTodos = todos.map((todo, index) => {
            
            if (index === clickedTodoIndex) {
                todo.completed = !todo.completed
            }
           // console.log('completedOPtion : ', option)
            return todo
        })
        console.log('updatedOptions : ', updatedTodos)
        setOptions(updatedTodos)

        /* 
        NB: After option is flipped to completed, it is returned to the options 
        */
        // this.setState((prevState) => ({
        //     options: prevState.options.filter(
        //         (option) => optionToDelete !== option   //if the option is not the same as optionToDelete, store in options
        //     )
        // }))
        //changed option argument to optionToDelete to differentiate the variables
    }

    const handlePick = () => {
       
        const randomNum = Math.floor(Math.random() * options.length) //has to be same length as array
        console.log('random number : ', randomNum)
        const option = options[randomNum] // From options array, we are picking a random index of an item equivalent to a random number generated
        //console.log(option)
        console.log('handlePick Option : ', option)

        // create an array of incomplete options, then randonly select from those. use useEffect
        setSelectedOption(option)
        // this.setState(() => ({
        //     selectedOption: option
        // }))
    }

    const handleDeleteModalOption = () => {
        setSelectedOption(undefined)
        // this.setState(() => ({ selectedOption: undefined }))
    }

    const handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to return item'
        } else if (options.indexOf(option) > -1) {
            //checks for a duplicate
            return 'This item already exists'
        }
        
        setOptions([...options, option])

        // this.setState((prevState) => ({
        //     options: prevState.options.concat(option)
        // }))
        //prevState.options.push(option); do not manipulate state manually. deconstruct and concat
    }

    useEffect(() => {
    try {
            const jsonOptions = localStorage.getItem('options')
            const options = JSON.parse(jsonOptions)

            setOptions(options)
        } catch (err) {
            //if error, do nothing at all. fall back to default values
        }
    },[])

    // componentDidMount() {
    //     try {
    //         const jsonOptions = localStorage.getItem('options')
    //         const options = JSON.parse(jsonOptions)

    //         if (options) {
    //             this.setState(() => ({ options })) //i.e setting options: options
    //         }
    //     } catch (err) {
    //         //if error, do nothing at all. fall back to default values
    //     }
    // }

    useEffect(() => {
        const jsonOptions = JSON.stringify(options)
        localStorage.setItem('options', jsonOptions)
    },[options])
    // componentDidUpdate(prevProps, prevState) {
    //     if (prevState.options.length !== this.state.options.length) {
    //         const jsonOptions = JSON.stringify(this.state.options)
    //         localStorage.setItem('options', jsonOptions)
    //     }
    //     //if new options are set in options array, take new items and store in localStorage
    // }

    const subtitle = 'What would you like to do today?'
        

    return (
            
        <div>
            
                <Header subtitle={subtitle} />
                <div className="container">
                    <Action
                        hasOptions={options.length > 1}
                        handlePick={handlePick}
                    />
                    <div className="widget">
                        <Options
                            options={options}
                            handleDeleteOptions={handleDeleteOptions}
                            markComplete={markComplete}
                        />
                        <AddOption handleAddOption={handleAddOption} 
                        />
                    </div>
                </div>
                <OptionModal
                    selectedOption={selectedOption}
                    handleDeleteModalOption={handleDeleteModalOption}
                />
            </div>
        )
    
}

export default IndecisionApp
