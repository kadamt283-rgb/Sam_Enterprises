import React, { useState, useEffect } from 'react';
import { FaStar, FaTimes, FaHeart, FaRegHeart, FaReply } from 'react-icons/fa';
import { supabase } from '../supabaseClient';
import './ReviewSection.css';

const ReviewSection = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [formData, setFormData] = useState({ name: '', rating: 5, comment: '' });
    const [successMessage, setSuccessMessage] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const [titleClickCount, setTitleClickCount] = useState(0);

    const fetchReviews = async () => {
        setLoading(true);
        try {
            // Check if Supabase is properly configured
            const isConfigured = supabase !== null &&
                supabase.supabaseUrl &&
                !supabase.supabaseUrl.includes('YOUR_SUPABASE_URL') &&
                !supabase.supabaseUrl.includes('your-project-url');

            if (!isConfigured) {
                console.warn("Supabase not configured, using local fallback.");
                throw new Error("Supabase credentials missing");
            }

            const { data, error } = await supabase
                .from('reviews')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;

            if (data) {
                setReviews(data.map(r => ({
                    ...r,
                    date: new Date(r.created_at).toLocaleDateString()
                })));
            }
        } catch (error) {
            console.error('Review fetch error:', error);
            const savedReviews = localStorage.getItem('sam_reviews');
            if (savedReviews) {
                setReviews(JSON.parse(savedReviews));
            } else {
                setReviews([
                    { id: 1, name: "Tushar Kadam", rating: 5, comment: "Excellent service! My rent agreement was done within 2 hours. Highly professional staff.", date: "10 days ago" },
                    { id: 2, name: "Rahul Jadhav", rating: 4, comment: "Very helpful for PAN card & Aadhar card update. The process was smooth.", date: "1 week ago" },
                    { id: 3, name: "Amit Kulkarni", rating: 5, comment: "Trusted place for all government works in Hadapsar. Sam Enterprises is the best!", date: "2 weeks ago" }
                ]);
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchReviews();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const newReviewData = {
                name: formData.name,
                rating: formData.rating,
                comment: formData.comment,
                created_at: new Date().toISOString()
            };

            const isConfigured = supabase !== null &&
                supabase.supabaseUrl &&
                !supabase.supabaseUrl.includes('YOUR_SUPABASE_URL') &&
                !supabase.supabaseUrl.includes('your-project-url');

            if (!isConfigured) {
                throw new Error("Supabase not configured");
            }

            const { data, error } = await supabase
                .from('reviews')
                .insert([newReviewData])
                .select();

            if (error) throw error;

            fetchReviews();
            setSuccessMessage('तुमचा अभिप्राय यशस्वीरित्या मिळाला! (Review submitted successfully!)');
        } catch (error) {
            console.error('Error submitting review:', error);
            const localReview = {
                id: Date.now(),
                name: formData.name,
                rating: formData.rating,
                comment: formData.comment,
                date: "Just now"
            };
            const updatedReviews = [localReview, ...reviews];
            setReviews(updatedReviews);
            localStorage.setItem('sam_reviews', JSON.stringify(updatedReviews));
            setSuccessMessage('तुमचा अभिप्राय यशस्वीरित्या सेव्ह झाला! (Review saved locally!)');
        } finally {
            setIsFormOpen(false);
            setFormData({ name: '', rating: 5, comment: '' });
            setTimeout(() => setSuccessMessage(''), 5000);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this review?")) return;

        try {
            const isConfigured = supabase !== null &&
                supabase.supabaseUrl &&
                !supabase.supabaseUrl.includes('YOUR_SUPABASE_URL') &&
                !supabase.supabaseUrl.includes('your-project-url');

            if (isConfigured) {
                const { error } = await supabase
                    .from('reviews')
                    .delete()
                    .eq('id', id);

                if (error) throw error;
            }

            // Update local state and storage
            const updatedReviews = reviews.filter(r => r.id !== id);
            setReviews(updatedReviews);
            localStorage.setItem('sam_reviews', JSON.stringify(updatedReviews));
            setSuccessMessage('अभिप्राय यशस्वीरित्या काढला गेला! (Review deleted!)');
        } catch (error) {
            console.error('Error deleting review:', error);
            alert("Error deleting review. Please try again.");
        } finally {
            setTimeout(() => setSuccessMessage(''), 3000);
        }
    };

    const handleLike = async (id, currentLikes) => {
        if (!isAdmin) return;

        try {
            const isConfigured = supabase !== null &&
                supabase.supabaseUrl &&
                !supabase.supabaseUrl.includes('YOUR_SUPABASE_URL') &&
                !supabase.supabaseUrl.includes('your-project-url');

            const newLikes = (currentLikes || 0) + 1;

            if (isConfigured) {
                const { error } = await supabase
                    .from('reviews')
                    .update({ likes_count: newLikes })
                    .eq('id', id);

                if (error) throw error;
            }

           
            const updatedReviews = reviews.map(r =>
                r.id === id ? { ...r, likes_count: newLikes } : r
            );
            setReviews(updatedReviews);
            localStorage.setItem('sam_reviews', JSON.stringify(updatedReviews));
        } catch (error) {
            console.error('Error liking review:', error);
        }
    };

    const handleReply = async (id, replyText) => {
        if (!isAdmin) return;

        try {
            const isConfigured = supabase !== null &&
                supabase.supabaseUrl &&
                !supabase.supabaseUrl.includes('YOUR_SUPABASE_URL') &&
                !supabase.supabaseUrl.includes('your-project-url');

            if (isConfigured) {
                const { error } = await supabase
                    .from('reviews')
                    .update({ reply: replyText })
                    .eq('id', id);

                if (error) throw error;
            }

            // Update local state
            const updatedReviews = reviews.map(r =>
                r.id === id ? { ...r, reply: replyText } : r
            );
            setReviews(updatedReviews);
            localStorage.setItem('sam_reviews', JSON.stringify(updatedReviews));
            setSuccessMessage('रिप्लाय सेव्ह झाला! (Reply saved!)');
        } catch (error) {
            console.error('Error saving reply:', error);
            alert("Error saving reply.");
        } finally {
            setTimeout(() => setSuccessMessage(''), 3000);
        }
    };

    const handleTitleClick = () => {
        const newCount = titleClickCount + 1;
        setTitleClickCount(newCount);

        if (newCount >= 5) {
            setIsAdmin(!isAdmin);
            setTitleClickCount(0);
            alert(!isAdmin ? "Admin Mode Enabled! (You can now delete reviews)" : "Admin Mode Disabled");
        }

        // Reset click count after 3 seconds of inactivity
        setTimeout(() => setTitleClickCount(0), 3000);
    };

    const renderStars = (rating, interactive = false) => {
        return (
            <div className={interactive ? "rating-input" : "stars-container"}>
                {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                        key={star}
                        className={star <= rating ? "star-filled" : "star-empty"}
                        onClick={interactive ? () => setFormData({ ...formData, rating: star }) : undefined}
                        style={{ cursor: interactive ? 'pointer' : 'default' }}
                    />
                ))}
            </div>
        );
    };

    const averageRating = reviews.length > 0
        ? (reviews.reduce((acc, curr) => acc + curr.rating, 0) / reviews.length).toFixed(1)
        : "5.0";

    return (
        <section className="section">
            <div className="container">
                <div className="review-section">
                    <div className="review-header">
                        <h2
                            onClick={handleTitleClick}
                            style={{ cursor: 'pointer', userSelect: 'none' }}
                        >
                            ग्राहकांचे अभिप्राय (Client Reviews)
                        </h2>
                        {successMessage && <div className="success-toast">{successMessage}</div>}
                        <div className="review-stats">
                            <span className="average-rating">{averageRating}</span>
                            <div>
                                {renderStars(Math.round(parseFloat(averageRating)))}
                                <p style={{ color: 'var(--text-muted)', marginTop: '5px' }}>Based on {reviews.length} reviews</p>
                            </div>
                        </div>
                    </div>

                    {loading ? (
                        <div style={{ textAlign: 'center', padding: '20px' }}>Loading reviews...</div>
                    ) : (
                        <div className="reviews-grid">
                            {reviews.map((review) => (
                                <div key={review.id} className="review-card">
                                    <div className="reviewer-info">
                                        <div className="reviewer-avatar">
                                            {review.name.charAt(0)}
                                        </div>
                                        <div>
                                            <div className="reviewer-name">{review.name}</div>
                                            <div className="review-date">{review.date}</div>
                                        </div>
                                    </div>
                                    {renderStars(review.rating)}
                                    <p className="review-comment">{review.comment}</p>
                                    {isAdmin && (
                                        <div className="admin-actions" style={{ marginTop: '10px' }}>
                                            <button
                                                className="btn-delete"
                                                onClick={() => handleDelete(review.id)}
                                                style={{
                                                    background: '#ef4444',
                                                    color: 'white',
                                                    border: 'none',
                                                    padding: '5px 10px',
                                                    borderRadius: '4px',
                                                    cursor: 'pointer',
                                                    fontSize: '0.8rem',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '5px'
                                                }}
                                            >
                                                <FaTimes /> Delete
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="write-review-container">
                        <button
                            className="btn-premium btn-primary-grad"
                            onClick={() => setIsFormOpen(true)}
                        >
                            Write a Review (अभिप्राय द्या)
                        </button>
                    </div>

                    {isFormOpen && (
                        <div className="review-form-overlay">
                            <div className="review-form-card">
                                <FaTimes className="close-form" onClick={() => setIsFormOpen(false)} />
                                <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>तुमचा अभिप्राय द्या</h3>
                                <form onSubmit={handleSubmit} className="premium-form">
                                    <div className="form-group">
                                        <label>तुमचे नाव (Full Name)</label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="Er. Tushar Kadam"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>रेटिंग (Rating)</label>
                                        {renderStars(formData.rating, true)}
                                    </div>
                                    <div className="form-group">
                                        <label>तुमचे मत (Comment)</label>
                                        <textarea
                                            rows="4"
                                            required
                                            placeholder="How was your experience?"
                                            value={formData.comment}
                                            onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                                        ></textarea>
                                    </div>
                                    <button type="submit" className="btn-premium btn-primary-grad" style={{ width: '100%', justifyContent: 'center' }}>
                                        Submit Review
                                    </button>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ReviewSection;
