import React from 'react'
import Option from './Option'

const Options = (props) => {
    console.log('Options props : ', props)
    return (
        <div>
            <div className="widget-header">
                <h3 className="widget-header__title"> Your Options</h3>
                <button
                    className="button button--link"
                    onClick={props.handleDeleteOptions}
                >
                    Remove All
                </button>
            </div>

            {props.options.length === 0 && (
                <p className="widget__message">
                    Please add an option to get started!
                </p>
            )}

            {props.options.map((option, index) => (
                <Option
                    key={index}
                    index={index}
                    optionText={option.title}
                    count={index + 1}
                    markComplete={props.markComplete}
                />
            ))}
        </div>
    )
    
}

export default Options
