import ContentLoader, {IContentLoaderProps} from "react-content-loader";
import s from './styles.module.scss';

export const SneakersSkeleton = ({...props}: IContentLoaderProps): JSX.Element => (
    <ContentLoader
        className={s.item}
        speed={2}
        width={150}
        height={300}
        viewBox="0 0 150 300"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="0" y="0" rx="13" ry="13" width="150" height="91" />
        <rect x="0" y="105" rx="6" ry="6" width="150" height="15" />
        <rect x="0" y="130" rx="6" ry="6" width="93" height="15" />
        <rect x="0" y="180" rx="6" ry="6" width="80" height="24" />
        <rect x="115" y="172" rx="6" ry="6" width="32" height="32" />
    </ContentLoader>
)