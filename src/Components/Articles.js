import React from 'react'
import Categories from './Common/Categories';

const Articles = () => {
    const articles = [
        {
            title: 'Sample Title Here 1',
            description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace'
        },
        {
            title: 'Sample Title Here 2',
            description: 'Second In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace Second In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace'
        },
        {
            title: 'Sample Title Here 3',
            description: 'Second In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace'
        },
        {
            title: 'Sample Title Here 4',
            description: 'Second In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace'
        },
        {
            title: 'Sample Title Here 5',
            description: 'Second In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace'
        },
        {
            title: 'HSample Title Here 6',
            description: 'Second In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace'
        },
        {
            title: 'Sample Title Here 7',
            description: 'Second In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace'
        },
        {
            title: 'Sample Title Here 8',
            description: 'Second In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace'
        },
    ];
    return (
        <Categories category={"Articles"} articles={articles}/>
    )
}

export default Articles
