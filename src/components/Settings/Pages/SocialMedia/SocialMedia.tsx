import {
  stylesContent,
  stylesForm,
  stylesBadge,
  stylesTable,
} from "@/styles/settings";

export default function SocialMedia() {
  return (
    <div>
      <div className={`${stylesContent.block}`}>
        <div className={`${stylesContent.header}`}>
          <div className={`${stylesContent.title}`}>Social Media</div>
        </div>

        <div className={`${stylesContent.content} ${stylesContent.divider}`}>
          <div
            className={`${stylesForm.formGroup} ${stylesForm.httpLeft} flex-col`}
          >
            <label htmlFor="username">Telegram</label>

            <div className="relative">
              <span
                className={`${stylesForm.httpText}  absolute inset-y-0 left-2 flex items-center pr-2`}
                style={{ borderRight: "1px solid #262A37" }}
              >
                http://
              </span>

              <input
                id="username"
                type="text"
                placeholder="t.me/username"
                className="pl-10 pr-4"
              />
            </div>
          </div>

          <div className={`${stylesForm.formGroup}`}>
            <button className="w-full mt-4">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}
