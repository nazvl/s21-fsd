import {fetchData} from "@/Shared/api.ts";
import type {Campus} from "@/Entities/Campus/model/campusType.ts";

// @ts-ignore
export async function fetchCampuses():Campus[] {
    try {
        const res = await fetchData(`/campuses/`);
        return res.campuses.filter((c: Campus) => !c.shortName.includes('QA') &&
            !c.shortName.includes('Test') &&
            !c.shortName.includes('online') &&
        !c.shortName.includes('Тестовый') );
    } catch(e) {
        console.error(e);
    }

}