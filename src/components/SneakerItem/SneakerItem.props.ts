import {DetailedHTMLProps, LiHTMLAttributes} from "react";
import {SneakerModel} from "@/models";

export interface SneakerItemProps extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
    item: SneakerModel;
}