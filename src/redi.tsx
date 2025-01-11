const Redierct = () => {
  return (
    <div id="modal-proceed" style={{ display: '' }}>
      <div className="Modal_fade__v6PMW">
        <div className="modal Modal_modalBody__AI7vd">
          <div
            id="modalContent"
            className="Modal_modalContent__DRze0 DebitCardPaymentConfirmModal_modal__1_MbF"
          >
            <h3 className="Typography_h3__HPYxa Modal_title__jtLFg">
              الدفع الآمن
            </h3>
            <h5
              className="Typography_h3__HPYxa Modal_title__jtLFg"
              style={{ fontSize: 16, padding: 0 }}
            >
              جاري المتابعة والتوجيه لصفحة الدفع البنكية
              <br />
              من خلال كي-نت
            </h5>
            <p
              className="Typography_p6__xuxGw Modal_description__EthdB"
              style={{ lineHeight: 22, padding: 0 }}
            >
              عند إتمام عملية الدفع بنجاح سيتم إعادة توجيهك من صفحة كي-نت إلى
              موقعنا لبدأ عملية تسليم طلبك
            </p>
            <div className="DebitCardPaymentConfirmModal_link__we4Qm">
              <button
                className="Button_button Button_primary Button_wide__XK76o"
                data-analytic-label="redirectToDebitCardBankPaymentPage"
              >
                <span className="Button_content">المتابعة</span>
              </button>
            </div>
            <span
              data-test-id="crossIconBtn"
              className="Icon_icon Modal_cross__eQNMb"
            >
              <span className="minus">
                <img
                  alt="icon"
                  src="/cross_modal.f7d09249.svg"
                  decoding="async"
                  data-nimg="fill"
                  className="asyncicon"
                />
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Redierct;
