import React, {useEffect, useState, KeyboardEvent} from 'react'
import styles from './Select.module.css'

type SelectProps = {
    value: string,
    items: Array<{ value: string, title: string }>,
    setValue: (item: string) => void
}

function Select(props: SelectProps) {

    const [collapsed, setCollapsed] = useState(true)

    const [hoveredItem, setHoveredItem] = useState(props.value)

    useEffect(() => {
        setHoveredItem(props.value)
    }, [props.value])

    let selectedItem = props.items.find(i => i.value === props.value)

    const onItemClick = (value: string) => {
        props.setValue(value)
        toggleItems()
    }

    const toggleItems = () => {
        setCollapsed(!collapsed)
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredItem) {
                    const nextComponent = e.key === 'ArrowDown'
                        ? props.items[i + 1]
                        : props.items[i - 1]

                    if (nextComponent) {
                        setHoveredItem(nextComponent.value)
                    }
                }
            }
        }

        if (e.key === 'Escape') {
            if (!collapsed) {
                toggleItems()
            }
            setHoveredItem(props.value)
        }

        if (e.key === 'Enter') {
            props.setValue(hoveredItem)
            toggleItems()
        }
    }

    const defaultListItemStyle = `${styles.listItems}`

    return (
        <div tabIndex={0}
             onKeyUp={onKeyUp}
             onBlur={!collapsed ? toggleItems : () => {}}
        >

            <div
                className={styles.selectedItem}
                onClick={toggleItems}
            >
                {selectedItem && selectedItem.title}
            </div>

            {!collapsed && <div>
                {props.items.map(
                    item => <div
                        onMouseEnter={() => setHoveredItem(item.value)}
                        onKeyUp={onKeyUp}
                        className={
                            `${defaultListItemStyle}
                        ${item.value === hoveredItem ? styles.itemHovered : styles.listItems}`
                        }
                        onClick={() => onItemClick(item.value)}>{item.title}</div>
                )}
            </div>
            }

        </div>
    )
}

export default Select