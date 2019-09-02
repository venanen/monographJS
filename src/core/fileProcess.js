


class FileProcess {
	size = 0;
	name = '';
	fileReader;
	text = '';

	validateFile(file) {
		return new Promise((resolve, reject) => {
			if (file !== undefined && file !== null && (/text/.test(file.type) || file.type === "")) {
				this.fileReader = new FileReader()
				this.fileReader.onload = () => {
					resolve(this.fileReader.result)
				}

				this.fileReader.onerror = () => {
					reject("Ошибка чтения файла")
				}

				this.fileReader.onabort = () => {
					reject("Чтение прервано")
				}
				this.fileReader.readAsText(file)

			} else {
				reject("Файл не загружен или не является текстовым документом")
			}
		})

	}


}

const fileProcess = new FileProcess();
export {fileProcess};