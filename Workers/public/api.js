const API_URL = "http://localhost:3000/api/workers";

// ה-ID שונו כאן ל-Workers (ודא ששינית אותם גם ב-HTML כפי שמוסבר למעלה)
const totalWorkers = document.getElementById('totalWorkers');
const average = document.getElementById('average');
const addUserForm = document.getElementById('addUserForm');
const workerGrid = document.getElementById('workerGrid');

async function loadWorkers() {
    try {
        const response = await fetch(API_URL);
        const workers = await response.json();
        renderWorkers(workers);
    } catch (error) {
        console.error("Error loading workers:", error);
    }
}

function renderWorkers(workers) {
    if (totalWorkers) {
        totalWorkers.innerText = workers.length;
    }

    if (average) {
        average.innerText = "-";
    }

    if (workers.length === 0) {
        workerGrid.innerHTML = `<p>No workers yet, please add one.</p>`;
        return;
    }

    workerGrid.innerHTML = workers.map((worker) => `
        <div class="card">
           <button class="deleteBtn" onclick="deleteWorker('${worker._id}')">🗑️</button>
           <div>${worker.name}</div>
           <div>${worker.email}</div>
           <div>${worker.department}</div>
           <div>${worker.role}</div>
           <div>${worker.phone || ''}</div>
        </div>
    `).join("");
}

async function deleteWorker(id) {
    if (!confirm("Are you sure you want to delete this worker?")) return;

    try {
        await fetch(`${API_URL}/${id}`, {
            method: "DELETE",
        });
        loadWorkers();
    } catch (error) {
        console.error("Error deleting worker:", error);
    }
}

if (addUserForm) {
    addUserForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const department = document.getElementById('department').value;
        const role = document.getElementById('role').value;
        const phone = document.getElementById('phone').value;

        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, department, role, phone }),
            });

            if (response.ok) {
                addUserForm.reset();
                loadWorkers();
            } else {
                const errorData = await response.json();
                console.error("Worker creation failed:", errorData.message);
            }
        } catch (error) {
            console.error("Error adding worker:", error);
        }
    });
}

loadWorkers();