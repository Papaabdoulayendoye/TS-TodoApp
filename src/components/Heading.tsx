import { FC, ReactElement } from 'react'

// type HeadingProps = { title : string }

interface Title {
    title : string;
}

// const Heading = ({title} : Title ): ReactElement => {
const Heading : FC<Title> = ( { title } ) : ReactElement => {
    return (
        <div>
            <h1>{title}</h1>
        </div>
    )
}

export default Heading
