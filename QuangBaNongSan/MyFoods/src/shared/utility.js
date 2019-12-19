export const updateObject = (oldObject, updatedProperties) =>{
	return{
		...oldObject,
		...updatedProperties
	};
}
export const checkValidity = (value, rules) =>{
     let isValid = true;
     if (!rules) {
        return true;
     }
        
    if (rules.required) {
        isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
        isValid = value.length >= rules.minLength && isValid
    }

    if (rules.maxLength) {
        isValid = value.length <= rules.maxLength && isValid
    }

    if (rules.isEmail) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test(value) && isValid
    }

    if (rules.isNumeric) {
        const pattern = /^\d+$/;
        isValid = pattern.test(value) && isValid
    }

    return isValid;
}
export const formatCurrency = (number) =>{
    var n = number;
    if(isNaN(n) == false){
        n = n.toString();
    }
    n = n.split('').reverse().join("");
    var n2 = n.replace(/\d\d\d(?!$)/g, "$&,");    
    return  n2.split('').reverse().join('');
}
export const baseUrl = "http://localhost:8080/www/TCWEB/MyFoods/";
export const ImageProductLink = baseUrl + "Public/images/products/";
export const ImageBannerLink = baseUrl + "Public/images/banner/";
export const ImageBannerCompanyLink = baseUrl + "Public/images/bannerCompany/";
export const ImageNewsCompanyLink = baseUrl + "Public/images/newsImage/";
export const logoImageLink = baseUrl + "/public/images/logo/";
