import * as React from "react";

export interface IDemoProps {
    value: number | undefined
}

export class Demo extends React.Component<IDemoProps> {
    public render() {
        return (
            <div className="test">
                React: {this.props.value?.toString()}
            </div>
        )
    }
}