import React from "react";
import Content from "../Content";
import PageWrapper from "../Common/PageWrapper";




class MainPageWrapper extends React.PureComponent {

    render(){
        return(
            <>
                <PageWrapper>
                    <Content />
                </PageWrapper>
            </>
        );
    }
}

export default MainPageWrapper;