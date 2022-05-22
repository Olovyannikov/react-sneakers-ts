import {SneakerModel} from "@/models";
import {SneakerItem, SneakersList} from "@/components";
import {useGetData} from "@/hooks";
import {API} from "@/lib";

export const SneakersGrid = (): JSX.Element => {
    const data = useGetData(API.getSneakers());

    return (
        <>

            <SneakersList>
                {data && data.map((el: SneakerModel) => <SneakerItem key={el.id} item={el}/>)}
            </SneakersList>
        </>
    )
}