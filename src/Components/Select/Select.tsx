import React, {useState} from 'react'

type SelectProps = {
    selected: string,
    items: Array<string>,
    setSelected: (item: string) => void
}

function Select(props: SelectProps) {

    const [collapsed, setCollapsed] = useState(true)

    return (
        <div>
            <div tabIndex={1}
                 onFocus={()=>setCollapsed(false)}>
                {props.selected}
            </div>

            {!collapsed && <div>
                {props.items.map(
                    item => <div onClick={() => {
                        props.setSelected(item)
                        setCollapsed(true)
                    }}>{item}</div>
                )}
            </div>
            }

        </div>
    )
}

export default Select