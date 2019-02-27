import React from 'react';

export const handleError = (e) => {
    switch (e) {
        case 'AUTH_ERROR':
            return "Your login or password isn't correct";
        case 'EMAIL_NOT_VALID':
            return "isn't valid";
        case 'USER_NOT_FOUND':
            return 'User not found';
        case 'SOCIAL_ACCOUNT':
            return 'You should login via your social network';
        case 'EMAIL_ALREADY_EXIST':
            return 'is already exist';
        case 'USERNAME_ALREADY_EXIST':
            return 'is already exist';
        case 'INVALID_VERIFICATION_TOKEN':
            return 'Verification link is expired';
        case 'USERNAME_NOT_VALID':
            return `should be minimum 5 characters and contains letters or digits only without spaces`;
        case 'PASSWORD_NOT_VALID':
            return "Password isn't valid";
        case 'LICENSE_ALREADY_USED':
            return 'is already exist';
        case 'TRADE_NUMBER_ALREADY_USED':
            return 'is already exist';
    }
};

export const nameRender = (e) => {
    switch (e) {
        case 'private':
            return 'Account type';
        case 'name':
            return 'Username';
        case 'parentCategoryId':
        case 'parentCategoriesIds':
            return 'Category';
        case 'childrenCategoryIds':
        case 'subCategoriesIds':
            return 'Subcategory';
        case 'tagIds':
            return 'Tag';
        default:
            return e;
    }
};
