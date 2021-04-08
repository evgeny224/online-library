import React from "react";
import Content from "../../Components/Content";
import PageWrapper from "../../Components/Common/PageWrapper";




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