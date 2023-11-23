import React, {Component, ReactNode} from "react";

import Error from "../../pages/error/error";

interface ErrorBoundaryInterface {
    children: ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryInterface, State> {
    constructor(props: ErrorBoundaryInterface) {
        super(props);
        this.state = {hasError: false};
    }

    componentDidCatch(error: Error) {
        this.setState({hasError: true});
    }

    render() {
        const {hasError} = this.state;
        const {children} = this.props;
        if (hasError) {
            return <Error />;
        }

        return children;
    }
}

export default ErrorBoundary;