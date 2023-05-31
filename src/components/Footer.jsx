import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { padding } from "@mui/system"
import "../styles/footer.css"

export default function Footer() {
    return (
        <>
            <div className="footer">
                <div className="about">
                    <p className="heading-footer">Về chúng tôi</p>
                    <p>Giờ mở cửa: Luôn mở cửa</p>
                    <p>Địa chỉ: Ngã tư Nhổn - phường Tây Tựu - quận Bắc Từ Liêm - Hà Nội</p>
                </div>

                <div className="follow">
                    <p className="heading-footer">Theo dõi chúng tôi</p>
                    <a href="https://www.facebook.com/qtmuabanlaptop/" target={"_blank"}><i class="fa-brands fa-facebook" style={{padding: "0 10px 0 0"}}></i>facebook</a>
                </div>
            </div>
        </>
    )
}