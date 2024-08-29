export default function reviewDetail({
    params,
}: {
    params: {
        bookId: string;
        reviewId: string;
    };
}) {
    return (
        <h1>Đánh giá { params.reviewId } Cho sách có id: { params.bookId }</h1>
    )
};