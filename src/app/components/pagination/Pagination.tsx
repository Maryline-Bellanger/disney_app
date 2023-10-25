"use client"
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import PreviousIcon from "../../../../public/images/previous.png";
import NextIcon from "../../../../public/images/next.png";

interface IPaginationProps {
    hasNextPage: boolean;
    hasPrevPage: boolean;
    link: string;
    perPage: string;
}

export default function Pagination({ hasNextPage, hasPrevPage, link, perPage }: IPaginationProps) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const page = searchParams.get('page') ?? '1';
    const per_page = searchParams.get('per_page') ?? `${perPage}`;

    return (
        <div className='flex justify-end m-4'>
            <button
                className='btn btn-sm btn-circle'
                disabled={!hasPrevPage}
                onClick={() => {
                router.push(`/${link}?page=${Number(page) - 1}&per_page=${per_page}`)
                }}>
                <Image src={PreviousIcon} alt='previous' width={18} />
            </button>

            <div className='btn btn-sm btn-circle mx-1'>
                {page}
            </div>

            <button
                className='btn btn-sm btn-circle'
                disabled={!hasNextPage}
                onClick={() => {
                router.push(`/${link}?page=${Number(page) + 1}&per_page=${per_page}`)
                }}>
                <Image src={NextIcon} alt='next' width={18} />
            </button>
        </div>
    )
}
