
export function updateParams (searchParams, setSearchParams, key, value , multi = false){

    const params = new URLSearchParams(searchParams);
    if(multi) {
        const existing= params.getAll(key)
        const has = existing.includes(value);
        params.delete(key);
        const newValues = has ? existing.filter( v => v !== value) : [...existing, value];
        newValues.forEach(v => params.append(key, v))
    }
    else{
        if(params.get(key) === value) params.delete(key)
            else params.set(key, value)
        }
        setSearchParams(params);
    }

    export const GetSelectedType = (searchParams)=> searchParams.get('filter.p.product_type')
    export const GetSelectedSort = (searchParams)=> searchParams.get('sort_by');
    export const GetSelectedColor = (searchParams)=> searchParams.get('filter.v.option.color'); 
    export const GetSelectedSize = (searchParams)=> searchParams.get('filter.v.option.size'); 
    export const GetSelectedGender = (searchParams)=> searchParams.get('filter.p.m.custom.gender');
    

    // export const handle