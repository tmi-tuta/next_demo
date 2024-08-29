import { notFound } from "next/navigation";

export default function reviewDetail({
    params,
}: {
    params: {
        bookId: string;
        reviewId: string;
    };
}) {
    if (parseInt(params.bookId) > 1000) {
        notFound();
    }
    return (
        <h1>Đánh giá { params.reviewId } Cho sách có id: { params.bookId }</h1>
    )
};